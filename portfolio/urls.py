from django.conf.urls import url
from django.contrib import admin
from pages import views as page_views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    url(r'^admin/', admin.site.urls),

    url(r'^$', page_views.home, name='index'),
    url(r'^angryDice/$', page_views.angryDice, name='angryDice'),
    url(r'^projects/$', page_views.projects, name='projects'),
    url(r'^earthquakeMap/$', page_views.earthquakeMap, name='earthquakeMap'),
    url(r'^weather_index/$', page_views.weather_index, name='weather_index'),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
