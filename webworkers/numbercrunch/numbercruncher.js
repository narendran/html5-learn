var n = 10;
for(i =1;i<n;i++){
	if(n%i!=0) continue;
	postMessage(i);
}
