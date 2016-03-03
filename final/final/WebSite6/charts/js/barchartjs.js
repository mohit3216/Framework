(function () {
    var helpers = Chart.helpers;
    Chart.RoundedRectangle = Chart.Rectangle.extend({
        draw: function () {
            var ctx = this.ctx,
                halfWidth = this.width / 2,
                leftX = this.x - halfWidth,
                rightX = this.x + halfWidth,
                top = this.base - (this.base - this.y),
                halfStroke = this.strokeWidth / 2,
                radius = halfWidth;

            // Canvas doesn't allow us to stroke inside the width so we can
            // adjust the sizes to fit if we're setting a stroke on the line
            if (this.showStroke) {
                leftX += halfStroke;
                rightX -= halfStroke;
                top += halfStroke;
            }

            ctx.beginPath();

            ctx.fillStyle = this.fillColor;
            ctx.strokeStyle = this.strokeColor;
            ctx.lineWidth = this.strokeWidth;


            // stop from creating funky shapes if the radius is bigger than the rectangle we are creating
            if (radius > (this.base - top) / 2) {
                radius = (this.base - top) / 2;
            }
            ctx.moveTo(leftX, this.base - radius);
            ctx.lineTo(leftX, top + radius);
            ctx.quadraticCurveTo(leftX, top-3, leftX + 6, top);
            ctx.lineTo(rightX - radius, top);
            ctx.quadraticCurveTo(rightX, top -3, rightX, top + 4);
            ctx.lineTo(rightX, this.base - radius);
            ctx.quadraticCurveTo(rightX, this.base, rightX - 0, this.base);
            ctx.lineTo(leftX + radius, this.base);
            ctx.quadraticCurveTo(leftX, this.base, leftX, this.base - 0);



            ctx.fill();
            if (this.showStroke) {
                ctx.stroke();
            }
        },

    });

    Chart.types.Bar.extend({
        name: "MyBar",
        initialize: function (data) {

            //Expose options as a scope variable here so we can access it in the ScaleClass
            var options = this.options;

            this.ScaleClass = Chart.Scale.extend({
                offsetGridLines: true,
                calculateBarX: function (datasetCount, datasetIndex, barIndex) {
                    //Reusable method for calculating the xPosition of a given bar based on datasetIndex & width of the bar
                    var xWidth = this.calculateBaseWidth(),
                        xAbsolute = this.calculateX(barIndex) - (xWidth / 2),
                        barWidth = this.calculateBarWidth(datasetCount);

                    return xAbsolute + (barWidth * datasetIndex) + (datasetIndex * options.barDatasetSpacing) + barWidth / 2;
                },
                calculateBaseWidth: function () {
                    return (this.calculateX(1) - this.calculateX(0)) - (2 * options.barValueSpacing);
                },
                calculateBarWidth: function (datasetCount) {
                    //The padding between datasets is to the right of each bar, providing that there are more than 1 dataset
                    var baseWidth = this.calculateBaseWidth() - ((datasetCount - 1) * options.barDatasetSpacing);

                    return (baseWidth / datasetCount);
                }
            });

            this.datasets = [];

            //Set up tooltip events on the chart
            if (this.options.showTooltips) {
                helpers.bindEvents(this, this.options.tooltipEvents, function (evt) {
                    var activeBars = (evt.type !== 'mouseout') ? this.getBarsAtEvent(evt) : [];

                    this.eachBars(function (bar) {
                        bar.restore(['fillColor', 'strokeColor']);
                    });
                    helpers.each(activeBars, function (activeBar) {
                        activeBar.fillColor = activeBar.highlightFill;
                        activeBar.strokeColor = activeBar.highlightStroke;
                    });
                    this.showTooltip(activeBars);
                });
            }

            //Declare the extension of the default point, to cater for the options passed in to the constructor
            this.BarClass = Chart.RoundedRectangle.extend({
                strokeWidth: this.options.barStrokeWidth,
                showStroke: this.options.barShowStroke,
                ctx: this.chart.ctx
            });

            //Iterate through each of the datasets, and build this into a property of the chart
            helpers.each(data.datasets, function (dataset, datasetIndex) {

                var datasetObject = {
                    label: dataset.label || null,
                    fillColor: dataset.fillColor,
                    strokeColor: dataset.strokeColor,
                    bars: []
                };

                this.datasets.push(datasetObject);

                helpers.each(dataset.data, function (dataPoint, index) {
                    //Add a new point for each piece of data, passing any required data to draw.
                    datasetObject.bars.push(new this.BarClass({
                        value: dataPoint,
                        label: data.labels[index],
                        datasetLabel: dataset.label,
                        strokeColor: dataset.strokeColor,
                        fillColor: dataset.fillColor,
                        highlightFill: dataset.highlightFill || dataset.fillColor,
                        highlightStroke: dataset.highlightStroke || dataset.strokeColor
                    }));
                }, this);

            }, this);

            this.buildScale(data.labels);

            this.BarClass.prototype.base = this.scale.endPoint;

            this.eachBars(function (bar, index, datasetIndex) {
                helpers.extend(bar, {
                    width: this.scale.calculateBarWidth(this.datasets.length),
                    x: this.scale.calculateBarX(this.datasets.length, datasetIndex, index),
                    y: this.scale.endPoint
                });
                bar.save();
            }, this);

            this.render();
        },
    });


    var team_data = [54, 90, 12, 35, 81];
    var new_data = [];
    for (var i = 0; i < team_data.length; i++) {
        if (team_data[i] <= 30) {

            new_data.push(1);
        }
        else if (team_data[i] <= 80 && team_data[i] >= 31) {

            new_data.push(2);
        }
        else if (team_data[i] <= 100 && team_data[i] >= 81) {

            new_data.push(3);
        }

    }

    var barChartData = {
        labels: ["Team1", "Team2", "Team3", "Team4", "Team5"],
        datasets: [{
            fillColor: "rgba(220,220,220,0.5)",
            strokeColor: "rgba(220,220,220,0.8)",
            highlightFill: "rgba(220,220,220,0.75)",
            highlightStroke: "rgba(220,220,220,1)",
            data: new_data
        }]

    }
    //window.onload = function () {
        var ctx = document.getElementById("canvas").getContext("2d");

        window.myBar = new Chart(ctx).MyBar(barChartData, {
            animation: false, barValueSpacing: 30,
            maintainAspectRatio: true,responsive:true
        });


        var colors = ["#00BFFF", "rgba(151, 187, 205, 1)", "rgba(17, 212, 180,1)", "rgba(255, 77, 166,1)", "rgba(255, 117, 26,1)"];

        
        for (var i = 0; i < team_data.length; i++) {
            myBar.datasets[0].bars[i].fillColor = "rgba(11,56,97,0.8)";
        }
        
        myBar.update();
    //}

}());