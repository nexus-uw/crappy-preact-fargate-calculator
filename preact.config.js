export default function (config, env, helpers) {
	// account for not being at root for github pages
	config.output.publicPath = '/crappy-preact-fargate-calculator/';
}
