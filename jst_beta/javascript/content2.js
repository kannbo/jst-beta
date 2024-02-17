const filefdfd=document.getElementById('betaarea')
filefdfd.innerHTML=`ベータ版が入っています<br>
<button onclick="addtag('h1')">見出し(h1)</button>
<button onclick="addtag('p')">段落(p)</button>
<button onclick="addtext('&lt;&gt;')">大なり小なりを追加</button>
<script>
const html=document.getElementById('html')
function addtag(x){
  html.value=String(html.value)+"<"+x+">"+"</"+x+">"
  input()
}
function addtext(x){
  html.value=String(html.value)+x
  input()
}
</script>
`
