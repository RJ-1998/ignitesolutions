#include <bits/stdc++.h> 
using namespace std; 

// Space Complexity: O(n)
// Time complexity : O(log n)
int main() 
{ 
	map<int,int> mymap; // (key,value) pair in map  // Map uses RED-BLACK TREE internally
	for(long i=0;i<1000000;i++){
		int n = 1 + (rand()%(100 - 1 + 1)); // generate a random number between (1,100)
		mymap[n]++; // increase the frequency for the generated number // Insertion happen in O(1)
	}
	map<int,int>::iterator it; // iterator for map
	
	cout<<"Number"<<"\t"<<"Frequency\n";
	// Print the value and it's frequency
	for(it=mymap.begin();it!=mymap.end();it++){
		cout<<it->first<<"\t"<<it->second;
		cout<<"\n";
	}
	
	// Print the result
	for(it=mymap.begin();it!=mymap.end();it++){ // for each number between (1 to 100)
		for(int i=0;i<it->second;i++){ // for frequency of each number
			cout<<it->first<<"\t";
		}
	}
	return 0; 
} 
