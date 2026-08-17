"""Composite a screen image into the client iPhone mockup. usage: phone_composite.py screen.png out.png
Screen image should be ~0.438 aspect (w/h); it is stretched to the detected screen quad."""
import sys, numpy as np
from PIL import Image
import os; SCR=os.path.dirname(os.path.abspath(__file__))+"/"
body=Image.open(SCR+"phone_body.png").convert("RGBA"); disp=Image.open(SCR+"phone_screen.png").convert("RGBA")
BX,BY=1252,302; DX,DY=1282,372
mask=np.array(disp.split()[-1])>128; h,w=mask.shape
fit=lambda pts: np.polyfit(pts[:,0],pts[:,1],1)
ys=np.arange(int(h*0.2),int(h*0.8))
aL,bL=fit(np.array([[y,np.nonzero(mask[y])[0].min()] for y in ys])); aR,bR=fit(np.array([[y,np.nonzero(mask[y])[0].max()] for y in ys]))
xs=np.r_[np.arange(int(w*0.12),int(w*0.30)),np.arange(int(w*0.70),int(w*0.88))]
aT,bT=fit(np.array([[x,np.nonzero(mask[:,x])[0].min()] for x in xs])); aB,bB=fit(np.array([[x,np.nonzero(mask[:,x])[0].max()] for x in xs]))
def isect(aX,bX,aY,bY): y=(aY*bX+bY)/(1-aY*aX); return (aX*y+bX,y)
TL=isect(aL,bL,aT,bT); TR=isect(aR,bR,aT,bT); BR=isect(aR,bR,aB,bB); BL=isect(aL,bL,aB,bB)
sw=(np.hypot(*np.subtract(TR,TL))+np.hypot(*np.subtract(BR,BL)))/2; sh=(np.hypot(*np.subtract(BL,TL))+np.hypot(*np.subtract(BR,TR)))/2
content=Image.open(sys.argv[1]).convert("RGB").resize((int(sw),int(sh)),Image.LANCZOS)
def coeffs(pa,pb):
    A=[]
    for (x,y),(X,Y) in zip(pa,pb): A+= [[x,y,1,0,0,0,-X*x,-X*y],[0,0,0,x,y,1,-Y*x,-Y*y]]
    return np.linalg.solve(np.array(A,float),np.array(pb,float).reshape(8))
warped=content.transform((w,h),Image.PERSPECTIVE,coeffs([TL,TR,BR,BL],[(0,0),(sw,0),(sw,sh),(0,sh)]),Image.BICUBIC)
screen=Image.new("RGBA",(w,h),(0,0,0,0)); screen.paste(warped,(0,0),Image.fromarray((mask*255).astype("uint8")))
canvas=Image.new("RGBA",body.size,(0,0,0,0)); canvas.alpha_composite(body,(0,0)); canvas.alpha_composite(screen,(DX-BX,DY-BY))
canvas=canvas.resize((1000,round(canvas.height*1000/canvas.width)),Image.LANCZOS); canvas.save(sys.argv[2],optimize=True); print(sys.argv[2],canvas.size)
