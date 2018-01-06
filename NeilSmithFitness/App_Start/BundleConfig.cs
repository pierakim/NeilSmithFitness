using System.Web.Optimization;

namespace NeilSmithFitness.Web
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            //JS Bundle
            var jsBundles = new ScriptBundle("~/bundles/js").Include(
                                                "~/Scripts/jQuery/jquery-{version}.js",
                                                "~/Scripts/jQuery/JQueryMigrate.js",
                                                "~/Scripts/bootstrap/bootstrap.min.js",
                                                "~/Scripts/jQuery/jquery.validate.js",
                                                "~/Scripts/jQuery/jquery.validate.unobtrusive.js",
                                                "~/Scripts/spin.js",
                                                "~/Scripts/stellar.js",
                                                 "~/Scripts/responsiveSlides.min.js",
                                                "~/Scripts/aos.js"
                                                );
            bundles.Add(jsBundles);

            //CSS Bundle
            var cssBundles = new StyleBundle("~/bundles/css").Include(
                                                "~/Content/bootstrap/bootstrap.min.css",
                                                "~/Content/Site.css",
                                                "~/Content/aos.css"
                                                );
            bundles.Add(cssBundles);

            BundleTable.EnableOptimizations = true;
        }
    }
}