import webapp2


import jinja2
import os

import sched
import time

jinja_current_directory = jinja2.Environment(
    loader=jinja2.FileSystemLoader(os.path.dirname(__file__)),
    extensions=['jinja2.ext.autoescape'],
    undefined=jinja2.StrictUndefined,
    autoescape=True)

class RedirectHandler(webapp2.RequestHandler):
    def get(self):
        self.redirect("../index.html")

class MainHandler(webapp2.RequestHandler):
    def get(self):
        results_template = jinja_current_directory.get_template("../index.html")
        self.response.write(results_template.render())


class BaymaxHandler(webapp2.RequestHandler):
    def get(self):
        results_template = jinja_current_directory.get_template("/templates/baymax.html")
        self.response.write(results_template.render())


class HospitalsHandler(webapp2.RequestHandler):
    def get(self):
        results_template = jinja_current_directory.get_template("/templates/hospitals.html")
        self.response.write(results_template.render())

class FirstAidHandler(webapp2.RequestHandler):
    def get(self):
        results_template = jinja_current_directory.get_template("/templates/firstaid.html")
        self.response.write(results_template.render())

app = webapp2.WSGIApplication([
("/", RedirectHandler),
("../index.html", MainHandler),
("/firstaid.html",FirstAidHandler),
("/hospitals.html", HospitalsHandler),
("/baymax.html", BaymaxHandler),
], debug=True)
