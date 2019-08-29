#include<bits/stdc++.h>
using namespace std;

// Time complexity will be length O(m*n) where 'm' is length of one word and 'n' is number of words
// Space complexity will be O(m)
string reverse_string(string str){
	string res="";
	stack<char> st; // create an empty char stack
	for(int i=0;i<str.length();i++){
		st.push(str[i]);// push every character
	}
	while(!st.empty()){// while stack is not empty
		string s(1,st.top());
		res.append(s);// append top character to result
		st.pop();// pop the character
	}
	return res;
}

string printResult(string str){
	string result="";
	string temp = ""; //temp string
	for(int i=0;i<str.length();i++){
		if( ((int)str[i] >=48 && (int)str[i] <=57)){ //if numbers then append
			string s(1,str[i]);
			temp.append(s);
		}
		else if( ( (int)str[i] >=65 && (int)str[i] <=90 ) ){ // if small alphabets then append
			string s(1,str[i]);
			temp.append(s);
		}
		else if(( (int)str[i] >=97 && (int)str[i] <=122 )){ // if large alphabets then append
			string s(1,str[i]);
			temp.append(s);
		}
		else if( (int)str[i] == 45 ){ // if hyphen then append
			string s(1,str[i]);
			temp.append(s);
		}
		else{
			if(!temp.empty()){
				result.append(reverse_string(temp));// call reverse_string function
				temp.clear();
			}
			string s(1,str[i]);
			result.append(s);// else append everything
		}
	}
	result.append(reverse_string(temp)); // call for remaining last string
	temp.clear();
	return result;
}
int main(){
	string str = "We are at Ignite Solutions! Their email-id is careers@ignitesol.com";
	
	cout<<printResult(str);
	return 0;
}

