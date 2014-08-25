import sys,getopt,os,shutil
__author__ = 'Huang'



def generate(name):
  #the root path to the project
  rootPath = os.path.abspath(os.path.join(os.path.dirname("__file__"),os.path.pardir))
  js = os.path.join(rootPath,'js',name+".js")
  scss = os.path.join(rootPath,'scss',name+".scss")
  jade = os.path.join(rootPath,'jade',name+".jade")
  open(js, 'a').close()
  open(scss, 'a').close()
  open(jade, 'a').close()
  #add js link
  _projectScripts = open(os.path.join(rootPath,'jade','_projectScripts.jade'),'a')
  try:
    ctx = "script(src='js/"+name+".js')"
    _projectScripts.writelines(ctx)
    _projectScripts.write('\n')
  finally:
    _projectScripts.close()

  #add style.scss link
  styleScss = open(os.path.join(rootPath,'scss','style.scss'),'a')
  try:
    ctx = "@import \""+name+"\";"
    styleScss.writelines(ctx)
    styleScss.write('\n')
  finally:
    styleScss.close()


def main(argv):
  try:
    opts, args = getopt.getopt(argv, 'h:i:p', ['help'])
    generate(args[0])
  except err:
    #print err
    pass
  pass

if __name__ == "__main__":
  main(sys.argv[1:])
