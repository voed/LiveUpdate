var xfStackAlert=XenForo.stackAlert;XenForo.stackAlert=function(t,e,n){xfStackAlert(t,e,n),t instanceof jQuery==0&&(t=$("<span>"+t+"</span>")),LiveUpdate.SendNotification(t[0].innerText)};