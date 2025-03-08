import { defineConfig } from "vitepress";

export default defineConfig({
    title: "Phitter Docs",
    description: "Phitter documentation",
    head: [
        ["link", { rel: "icon", href: "/static/logo.svg" }],
        // ["link", { rel: "stylesheet", href: "/static/custom.css" }],
    ],
    themeConfig: {
        logo: "/static/logo.svg",
        nav: [
            { text: "Home", link: "/" },
            { text: "Examples", link: "/simulation/queue-simulation/own-distribution" },
        ],
        sidebar: [
            {
                text: "Fit",
                collapsed: true,
                items: [
                    { text: "Phitter Python", link: "/fit/markdown-examples" },
                    { text: "Benchmarks", link: "/fit/markdown-examples" },
                ],
            },
            {
                text: "Simulation",
                collapsed: true,
                items: [
                    {
                        text: "Queue Simulation",
                        collapsed: true,
                        items: [
                            { text: "Own Distribution", link: "/simulation/queue-simulation/own-distribution" },
                            { text: "Create Queue Simulation Instance", link: "/simulation/queue-simulation/create-queue-instance" },
                            { text: "Run Queue Instance", link: "/simulation/queue-simulation/run-queue-simulation" },
                            { text: "Queue Simulation Metrics", link: "/simulation/queue-simulation/queue-metrics" },
                            { text: "Queue Simulation Probabilities", link: "/simulation/queue-simulation/queue-probabilities" },
                            { text: "Confidence Interval for Simulation Metrics", link: "/simulation/queue-simulation/queue-confidence-interval" },
                        ],
                    },
                    {
                        text: "Process Simulation",
                        collapsed: true,
                        items: [
                            { text: "Create Instance Simulation", link: "/simulation/process-simulation/create-instance-simulation" },
                            { text: "Create a Process Simulation", link: "/simulation/process-simulation/create-process" },
                            { text: "Graph Process Simulation", link: "/simulation/process-simulation/graph-process" },
                            { text: "Run a Process Simulation", link: "/simulation/process-simulation/run-simulation" },
                            { text: "Simulation Metrics", link: "/simulation/process-simulation/simulation-metrics" },
                            { text: "Confidence Interval of Metrics", link: "/simulation/process-simulation/confidence-interval" },
                        ],
                    },
                ],
            },
            {
                text: "Distributions",
                link: "/distributions/distributions",
                collapsed: true,
                items: [
                    // { text: "Summarize", collapsed: true, link: "/distributions/summarize" },
                    {
                        text: "Continuous",
                        collapsed: true,
                        items: [
                            { text: "Alpha", collapsed: true, link: "/distributions/continuous/alpha" },
                            { text: "Arcsine", collapsed: true, link: "/distributions/continuous/arcsine" },
                            { text: "Argus", collapsed: true, link: "/distributions/continuous/argus" },
                            { text: "Beta", collapsed: true, link: "/distributions/continuous/beta" },
                            { text: "Beta Prime", collapsed: true, link: "/distributions/continuous/beta_prime" },
                            { text: "Beta Prime 4P", collapsed: true, link: "/distributions/continuous/beta_prime_4p" },
                            { text: "Bradford", collapsed: true, link: "/distributions/continuous/bradford" },
                            { text: "Burr", collapsed: true, link: "/distributions/continuous/burr" },
                            { text: "Burr 4P", collapsed: true, link: "/distributions/continuous/burr_4p" },
                            { text: "Cauchy", collapsed: true, link: "/distributions/continuous/cauchy" },
                            { text: "Chi Square", collapsed: true, link: "/distributions/continuous/chi_square" },
                            { text: "Chi Square 3P", collapsed: true, link: "/distributions/continuous/chi_square_3p" },
                            { text: "Dagum", collapsed: true, link: "/distributions/continuous/dagum" },
                            { text: "Dagum 4P", collapsed: true, link: "/distributions/continuous/dagum_4p" },
                            { text: "Erlang", collapsed: true, link: "/distributions/continuous/erlang" },
                            { text: "Erlang 3P", collapsed: true, link: "/distributions/continuous/erlang_3p" },
                            { text: "Error Function", collapsed: true, link: "/distributions/continuous/error_function" },
                            { text: "Exponential", collapsed: true, link: "/distributions/continuous/exponential" },
                            { text: "Exponential 2P", collapsed: true, link: "/distributions/continuous/exponential_2p" },
                            { text: "F", collapsed: true, link: "/distributions/continuous/f" },
                            { text: "F 4P", collapsed: true, link: "/distributions/continuous/f_4p" },
                            { text: "Fatigue Life", collapsed: true, link: "/distributions/continuous/fatigue_life" },
                            { text: "Folded Normal", collapsed: true, link: "/distributions/continuous/folded_normal" },
                            { text: "Frechet", collapsed: true, link: "/distributions/continuous/frechet" },
                            { text: "Gamma", collapsed: true, link: "/distributions/continuous/gamma" },
                            { text: "Gamma 3P", collapsed: true, link: "/distributions/continuous/gamma_3p" },
                            { text: "Generalized Extreme Value", collapsed: true, link: "/distributions/continuous/generalized_extreme_value" },
                            { text: "Generalized Gamma", collapsed: true, link: "/distributions/continuous/generalized_gamma" },
                            { text: "Generalized Gamma 4P", collapsed: true, link: "/distributions/continuous/generalized_gamma_4p" },
                            { text: "Generalized Logistic", collapsed: true, link: "/distributions/continuous/generalized_logistic" },
                            { text: "Generalized Normal", collapsed: true, link: "/distributions/continuous/generalized_normal" },
                            { text: "Generalized Pareto", collapsed: true, link: "/distributions/continuous/generalized_pareto" },
                            { text: "Gibrat", collapsed: true, link: "/distributions/continuous/gibrat" },
                            { text: "Gumbel Left", collapsed: true, link: "/distributions/continuous/gumbel_left" },
                            { text: "Gumbel Right", collapsed: true, link: "/distributions/continuous/gumbel_right" },
                            { text: "Half Normal", collapsed: true, link: "/distributions/continuous/half_normal" },
                            { text: "Hyperbolic Secant", collapsed: true, link: "/distributions/continuous/hyperbolic_secant" },
                            { text: "Inverse Gamma", collapsed: true, link: "/distributions/continuous/inverse_gamma" },
                            { text: "Inverse Gamma 3P", collapsed: true, link: "/distributions/continuous/inverse_gamma_3p" },
                            { text: "Inverse Gaussian", collapsed: true, link: "/distributions/continuous/inverse_gaussian" },
                            { text: "Inverse Gaussian 3P", collapsed: true, link: "/distributions/continuous/inverse_gaussian_3p" },
                            { text: "Johnson SB", collapsed: true, link: "/distributions/continuous/johnson_sb" },
                            { text: "Johnson SU", collapsed: true, link: "/distributions/continuous/johnson_su" },
                            { text: "Kumaraswamy", collapsed: true, link: "/distributions/continuous/kumaraswamy" },
                            { text: "Laplace", collapsed: true, link: "/distributions/continuous/laplace" },
                            { text: "Levy", collapsed: true, link: "/distributions/continuous/levy" },
                            { text: "Loggamma", collapsed: true, link: "/distributions/continuous/loggamma" },
                            { text: "Logistic", collapsed: true, link: "/distributions/continuous/logistic" },
                            { text: "Loglogistic", collapsed: true, link: "/distributions/continuous/loglogistic" },
                            { text: "Loglogistic 3P", collapsed: true, link: "/distributions/continuous/loglogistic_3p" },
                            { text: "Lognormal", collapsed: true, link: "/distributions/continuous/lognormal" },
                            { text: "Maxwell", collapsed: true, link: "/distributions/continuous/maxwell" },
                            { text: "Moyal", collapsed: true, link: "/distributions/continuous/moyal" },
                            { text: "Nakagami", collapsed: true, link: "/distributions/continuous/nakagami" },
                            { text: "Non Central Chi Square", collapsed: true, link: "/distributions/continuous/non_central_chi_square" },
                            { text: "Non Central F", collapsed: true, link: "/distributions/continuous/non_central_f" },
                            { text: "Non Central T Student", collapsed: true, link: "/distributions/continuous/non_central_t_student" },
                            { text: "Normal", collapsed: true, link: "/distributions/continuous/normal" },
                            { text: "Pareto First Kind", collapsed: true, link: "/distributions/continuous/pareto_first_kind" },
                            { text: "Pareto Second Kind", collapsed: true, link: "/distributions/continuous/pareto_second_kind" },
                            { text: "Pert", collapsed: true, link: "/distributions/continuous/pert" },
                            { text: "Power Function", collapsed: true, link: "/distributions/continuous/power_function" },
                            { text: "Rayleigh", collapsed: true, link: "/distributions/continuous/rayleigh" },
                            { text: "Reciprocal", collapsed: true, link: "/distributions/continuous/reciprocal" },
                            { text: "Rice", collapsed: true, link: "/distributions/continuous/rice" },
                            { text: "Semicircular", collapsed: true, link: "/distributions/continuous/semicircular" },
                            { text: "T Student", collapsed: true, link: "/distributions/continuous/t_student" },
                            { text: "T Student 3P", collapsed: true, link: "/distributions/continuous/t_student_3p" },
                            { text: "Trapezoidal", collapsed: true, link: "/distributions/continuous/trapezoidal" },
                            { text: "Triangular", collapsed: true, link: "/distributions/continuous/triangular" },
                            { text: "Uniform", collapsed: true, link: "/distributions/continuous/uniform" },
                            { text: "Weibull", collapsed: true, link: "/distributions/continuous/weibull" },
                            { text: "Weibull 3P", collapsed: true, link: "/distributions/continuous/weibull_3p" },
                        ],
                    },
                    {
                        text: "Discrete",
                        collapsed: true,
                        items: [
                            { text: "Bernoulli", collapsed: true, link: "/distributions/discrete/bernoulli" },
                            { text: "Binomial", collapsed: true, link: "/distributions/discrete/binomial" },
                            { text: "Geometric", collapsed: true, link: "/distributions/discrete/geometric" },
                            { text: "Hypergeometric", collapsed: true, link: "/distributions/discrete/hypergeometric" },
                            { text: "Logarithmic", collapsed: true, link: "/distributions/discrete/logarithmic" },
                            { text: "Negative Binomial", collapsed: true, link: "/distributions/discrete/negative_binomial" },
                            { text: "Poisson", collapsed: true, link: "/distributions/discrete/poisson" },
                            { text: "Uniform", collapsed: true, link: "/distributions/discrete/uniform" },
                        ],
                    },
                ],
            },
        ],
        socialLinks: [{ icon: "github", link: "https://github.com/phitterio/phitter-kernel" }],
    },
    markdown: {
        math: true,
    },
});
