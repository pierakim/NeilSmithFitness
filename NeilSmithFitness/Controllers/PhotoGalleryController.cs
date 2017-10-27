using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace NeilSmithFitness.Web.Controllers
{
    public class PhotoGalleryController : Controller
    {
        // GET: PhotoGallery
        public ActionResult Index()
        {
            return View();
        }
    }
}