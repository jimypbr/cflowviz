/*
   var xmlhttp = new XMLHttpRequest();
   var url = "call_tree.json";

   var treeData;
   xmlhttp.onreadystatechange = function() {
   if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
   treeData = JSON.parse(xmlhttp.responseText);
   }
   }

   xmlhttp.open("GET", url, true);
   xmlhttp.send();
   */

//var treeData = {'id': 0, 'children': [{'id': 1}, {'id': 2}]};
var treeData = [ 
{'name': 'main()', 'id': 0, 'children': [{'name': 'csecond()', 'id': 2}, {'name': 'initilise()', 'id': 10}, {'name': 'get_orthol()', 'id': 345}]}
];
//{'name': 'main()', 'id': 0, 'children': [{'name': 'csecond()', 'id': 2}, {'name': 'initilise()', 'id': 10}, {'children': [{'name': 'get_lmax()', 'id': 147}, {'name': 'load_txt_dbl()', 'id': 141}], 'name': 'load_lens()', 'id': 139}, {'children': [{'name': 'load_three_int()', 'id': 25}, {'children': [{'name': 'create_iarray()', 'id': 23}], 'name': 'create_order_prim()', 'id': 22}], 'name': 'set_terms_prim()', 'id': 20}, {'name': 'get_orthol()', 'id': 345}, {'name': 'update_gamma()', 'id': 335}, {'name': 'get_pmax_prim()', 'id': 156}, {'name': 'get_pmax_late()', 'id': 157}, {'name': 'get_terms_late()', 'id': 158}, {'name': 'get_b_xsize()', 'id': 159}, {'name': 'find_perm_prim()', 'id': 160}, {'children': [{'children': [{'name': 'create_iarray()', 'id': 36}], 'name': 'create_order_late()', 'id': 35}, {'name': 'load_three_int()', 'id': 38}], 'name': 'set_terms_late()', 'id': 33}, {'children': [{'name': 'create_array()', 'id': 164}, {'name': 'basis_functions_fourier()', 'id': 167}, {'name': 'destroy_array()', 'id': 171}, {'name': 'get_cl()', 'id': 175}, {'name': 'get_noise()', 'id': 176}, {'name': 'get_beam()', 'id': 177}, {'name': 'get_lens_tt()', 'id': 178}, {'name': 'get_lens_tp()', 'id': 179}, {'name': 'basis_functions_sinlog()', 'id': 180}, {'name': 'basis_functions_legendre()', 'id': 185}], 'name': 'create_basis_late()', 'id': 163}, {'children': [{'name': 'array_read()', 'id': 64}, {'name': 'create_ivector()', 'id': 47}, {'name': 'ivector_read()', 'id': 49}, {'name': 'create_vector()', 'id': 55}, {'name': 'create_array()', 'id': 57}, {'children': [{'name': 'create_3Darray()', 'id': 60}], 'name': 'create_beta()', 'id': 59}], 'name': 'read_beta()', 'id': 46}, {'children': [{'name': 'get_b_xvec()', 'id': 312}, {'children': [{'name': 'find_perm_late()', 'id': 320}, {'name': 'find_perm_prim()', 'id': 321}, {'name': 'destroy_array()', 'id': 322}, {'name': 'destroy_vector()', 'id': 324}, {'name': 'get_pmax_prim()', 'id': 314}, {'name': 'get_b_lsize()', 'id': 315}, {'name': 'create_vector()', 'id': 316}, {'name': 'create_array()', 'id': 318}], 'name': 'gamma_pt()', 'id': 313}, {'name': 'get_b_xsize()', 'id': 309}, {'name': 'create_vector()', 'id': 310}], 'name': 'calculate_gamma()', 'id': 308}, {'children': [{'name': 'create_ivector()', 'id': 187}, {'name': 'create_array()', 'id': 189}, {'name': 'array_read()', 'id': 191}], 'name': 'read_orthol()', 'id': 186}, {'children': [{'name': 'create_array()', 'id': 200}, {'name': 'array_read()', 'id': 202}, {'name': 'create_ivector()', 'id': 198}], 'name': 'read_lambdal()', 'id': 197}, {'name': 'get_terms_prim()', 'id': 70}, {'name': 'get_b_lsize()', 'id': 71}, {'name': 'create_ivector()', 'id': 72}, {'name': 'get_b_lvec()', 'id': 74}, {'name': 'init_lmax()', 'id': 75}, {'children': [{'name': 'create_vector()', 'id': 77}], 'name': 'create_cl()', 'id': 76}, {'children': [{'name': 'create_vector()', 'id': 80}], 'name': 'create_beam()', 'id': 79}, {'name': 'create_array()', 'id': 208}, {'children': [{'name': 'create_vector()', 'id': 83}], 'name': 'create_noise()', 'id': 82}, {'children': [{'name': 'create_array()', 'id': 212}], 'name': 'create_gamma()', 'id': 211}, {'children': [{'name': 'create_vector()', 'id': 86}], 'name': 'create_t_wgt()', 'id': 85}, {'name': 'create_vector()', 'id': 215}, {'children': [{'name': 'create_vector()', 'id': 89}], 'name': 'create_lens()', 'id': 88}, {'children': [{'name': 'get_cl()', 'id': 225}, {'name': 'get_noise()', 'id': 226}, {'name': 'get_beam()', 'id': 227}, {'children': [{'name': 'find_perm_prim()', 'id': 229}, {'name': 'get_beta()', 'id': 230}], 'name': 'calculate_xint()', 'id': 228}, {'name': 'calculate_geometric()', 'id': 239}, {'children': [{'name': 'find_perm_late()', 'id': 243}, {'name': 'get_basis_late()', 'id': 244}], 'name': 'plijk()', 'id': 242}, {'name': 'get_terms_prim()', 'id': 218}, {'name': 'get_lmax()', 'id': 219}, {'name': 'get_b_xsize()', 'id': 220}, {'name': 'create_vector()', 'id': 221}, {'name': 'get_b_xvec()', 'id': 223}], 'name': 'calculate_gamma_3D()', 'id': 217}, {'children': [{'name': 'load_two()', 'id': 93}], 'name': 'load_cl()', 'id': 91}, {'children': [{'name': 'create_ivector()', 'id': 337}, {'name': 'array_write()', 'id': 339}], 'name': 'output_gamma()', 'id': 336}, {'name': 'find_perm_late()', 'id': 161}, {'children': [{'name': 'load_three()', 'id': 109}], 'name': 'load_BN()', 'id': 107}, {'name': 'get_lambdal()', 'id': 210}, {'children': [{'name': 'get_beam()', 'id': 256}, {'children': [{'children': [{'children': [{'name': 'A2()', 'id': 289}, {'name': 'tB2()', 'id': 291}, {'name': 'A3()', 'id': 293}, {'name': 'besseltaylor()', 'id': 278}, {'name': 'tB1()', 'id': 287}], 'name': 'feval_asy2()', 'id': 275}, {'children': [{'name': 'mycosA()', 'id': 273}], 'name': 'feval_asy1()', 'id': 269}], 'name': 'feval()', 'id': 268}], 'name': 'asy()', 'id': 260}, {'name': 'create_array()', 'id': 296}, {'name': 'get_pmax_late()', 'id': 299}, {'name': 'get_basis_late()', 'id': 300}, {'name': 'get_pmax_prim()', 'id': 301}, {'name': 'create_3Darray()', 'id': 302}, {'name': 'get_beta()', 'id': 304}, {'children': [{'name': 'destroy_3Darray()', 'id': 306}], 'name': 'destroy_beta()', 'id': 305}, {'name': 'get_b_lsize()', 'id': 246}, {'name': 'create_ivector()', 'id': 247}, {'name': 'get_b_lvec()', 'id': 249}, {'name': 'get_b_xsize()', 'id': 250}, {'name': 'create_vector()', 'id': 251}, {'name': 'get_cl()', 'id': 254}, {'name': 'get_noise()', 'id': 255}], 'name': 'init_gamma_glint()', 'id': 245}, {'children': [{'name': 'load_txt_dbl()', 'id': 125}], 'name': 'load_TL()', 'id': 123}]}

var treeData = 
{'name': 'main()', 'id': 0, 'children': [{'name': 'csecond()', 'id': 2}]};
// ************** Generate the tree diagram	 *****************
//

var margin;
	width,
	height;
var i, duration, root;
var tree;
var diagonal;
var svg;

function initialize_drawing() {
	margin = {top: 20, right: 150, bottom: 10, left: 120},
	width = 1200 - margin.right - margin.left,
	height = 1000 - margin.top - margin.bottom;

	i = 0,
	duration = 750,
	root;

	tree = d3.layout.tree()
		.size([height, width]);

	diagonal = d3.svg.diagonal()
		.projection(function(d) { return [d.y, d.x]; });

	d3.select("svg").remove();
	svg = d3.select("body").append("svg")
		.attr("width", width + margin.right + margin.left)
		.attr("height", height + margin.top + margin.bottom)
		.append("g")
		.attr("transform", "translate(" + margin.left + "," + margin.top + ")")
		.on("mouseover", function(d) {
			d3.select(this).attr("r", 10).style("fill", "red")})
		.on("mouseout", function(d) {
			d3.select(this).attr("r", 10).style("fill", "blue")});
}

function drawTree(treeJSON) {
	initialize_drawing();
	var treeData1 = [treeJSON];
	root = treeData1[0];
	root.x0 = height / 2;
	root.y0 = 0;

	update(root);

	d3.select(self.frameElement).style("height", "500px");
}

//drawTree(treeData);

function update(source) {

	// Compute the new tree layout.
	var nodes = tree.nodes(root).reverse(),
		links = tree.links(nodes);

	// Normalize for fixed-depth.
	nodes.forEach(function(d) { d.y = d.depth * 180; });

	// Update the nodes…
	var node = svg.selectAll("g.node")
		.data(nodes, function(d) { return d.id || (d.id = ++i); });

	// Enter any new nodes at the parent's previous position.
	var nodeEnter = node.enter().append("g")
		.attr("class", "node")
		.attr("transform", function(d) { return "translate(" + source.y0 + "," + source.x0 + ")"; })
		.on("click", click);

	nodeEnter.append("circle")
		.attr("r", 1e-6)
		.style("fill", function(d) { return d._children ? "lightsteelblue" : "#fff"; });

	nodeEnter.append("text")
		.attr("x", function(d) { return d.children || d._children ? -13 : 13; })
		.attr("dy", ".35em")
		.attr("text-anchor", function(d) { return d.children || d._children ? "end" : "start"; })
		.text(function(d) { return d.name; })
		.style("fill-opacity", 1e-6);

	// Transition nodes to their new position.
	var nodeUpdate = node.transition()
		.duration(duration)
		.attr("transform", function(d) { return "translate(" + d.y + "," + d.x + ")"; });

	nodeUpdate.select("circle")
		.attr("r", 10)
		.style("fill", function(d) { return d._children ? "lightsteelblue" : "#fff"; });

	nodeUpdate.select("text")
		.style("fill-opacity", 1);

	// Transition exiting nodes to the parent's new position.
	var nodeExit = node.exit().transition()
		.duration(duration)
		.attr("transform", function(d) { return "translate(" + source.y + "," + source.x + ")"; })
		.remove();

	nodeExit.select("circle")
		.attr("r", 1e-6);

	nodeExit.select("text")
		.style("fill-opacity", 1e-6);

	// Update the links…
	var link = svg.selectAll("path.link")
		.data(links, function(d) { return d.target.id; });

	// Enter any new links at the parent's previous position.
	link.enter().insert("path", "g")
		.attr("class", "link")
		.attr("d", function(d) {
			var o = {x: source.x0, y: source.y0};
			return diagonal({source: o, target: o});
		});

	// Transition links to their new position.
	link.transition()
		.duration(duration)
		.attr("d", diagonal);

	// Transition exiting nodes to the parent's new position.
	link.exit().transition()
		.duration(duration)
		.attr("d", function(d) {
			var o = {x: source.x, y: source.y};
			return diagonal({source: o, target: o});
		})
	.remove();

	// Stash the old positions for transition.
	nodes.forEach(function(d) {
		d.x0 = d.x;
		d.y0 = d.y;
	});
}

// Toggle children on click.
function click(d) {
	if (d.children) {
		d._children = d.children;
		d.children = null;
	} else {
		d.children = d._children;
		d._children = null;
	}
	update(d);
}
