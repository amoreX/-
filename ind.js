function prog66() {
  const prog1 =
    "  #6linearPlot" +
    "  import numpy as np" +
    "  import matplotlib.pyplot as plt" +
    "  x = np.linspace(0,1,10)" +
    "  y = [2,4,56,6,7,8,9,1,6,1]" +
    "  print(x,y)" +
    "  plt.xlabel(x-axis)" +
    "  plt.ylabel(y-axis)" +
    "  plt.title(Line Plot)" +
    "  plt.plot(x,y)" +
    "  plt.show()" +
    "  #6lineplotlineformatting" +
    "import numpy as np" +
    "import matplotlib.pyplot as plt" +
    "plt.xkcd()" +
    "x=np.linspace(0,1,10)" +
    "y = x**3" +
    "z = x**4" +
    "plt.plot(x,y,label=cubic,color=red,marker=s,linestyle=-.,linewidth=2)" +
    "plt.plot(x,z,label=quad,color=green,marker=s,linestyle=-.)" +
    "plt.show()";
  navigator.clipboard.writeText(prog1);
}

function prog77() {
  const prog2 =
    " #7)seaborn and aesthetic fn" +
    "  import seaborn as sb" +
    " import matplotlib.pyplot as plt" +
    "tips = sb.load_dataset(tips)" +
    "  sb.scatterplot(data=tips,x=total_bill,y=tip,hue=time,style=time,markers=['P','p'])" +
    "  plt.title(Scatter Plot)" +
    "  plt.xlabel(total bill)" +
    "  plt.ylabel(tip)" +
    " plt.show()";
  navigator.clipboard.writeText(prog2);
}

function prog88() {
  const prog3 =
    "  #8 bokeh" +
    "  from bokeh.plotting import figure,output_notebook,show" +
    "  output_notebook()" +
    "  x = [1,2,3,4,5,]" +
    "  y = [6,7,2,4,5]" +
    "  p = figure(title = Line plot,x_axis_label =x, y_axis_labely)" +
    "  p.asterisk(x,y,color = red ,size=20)" +
    "  show(p)";

  navigator.clipboard.writeText(prog3);
}

function prog99() {
  const prog4 =
    "#9)line_3d" +
    "import plotly.express as px" +
    "x = np.linspace(0,1,100)" +
    " y=np.sin(x)" +
    " z=np.cos(x)" +
    "px.line_3d(x=x,y=y,z=z).show()" +
    "#9)contour" +
    "import plotly.graph_objects as go" +
    "data=[[1,2,3,4,5],[3,4,6,7,8],[4,5,3,6,2]]" +
    "go.Figure(data=[go.Contour(z=data)]).show()";
  navigator.clipboard.writeText(prog4);
}

function prog1010() {
  const prog5 =
    "#10)timeseries" +
    "import plotly.graph_objects as go" +
    "from datetime import datetime" +
    "dt=[datetime(2023,12,2),datetime(2023,12,3),datetime(2023,12,4),datetime(2023,12,5),datetime(2023,12,6)]" +
    "val = [3,4,2,5,1]" +
    "go.Figure(data=[go.Scatter(x=dt,y=val,mode='lines+markers')],layout=go.Layout(title=timeseries)).show()" +
    "#10)map" +
    "import plotly.graph_objects as go" +
    "go.Figure(data=go.Choropleth(locations=['IND','AUS'],z=[1,2],hovertext=['India','Australia'],hoverinfo='location+z+text'),layout=go.Layout(geo=dict(showcoastlines=True))).show()";

  navigator.clipboard.writeText(prog5);
}
