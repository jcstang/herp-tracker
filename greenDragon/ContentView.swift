//
//  ContentView.swift
//  greenDragon
//
//  Created by Jacob Stanger on 10/2/20.
//

import SwiftUI

struct ContentView: View {
    @State var username: String = ""
    @State var password: String = ""

    func buttonClicked() -> Void {
        //stuff
        print("ive been clicked")
    }
    
    var body: some View {
        VStack {
            VStack {
                Text("Hello, \(username)")
                TextField("Username...", text: $username).textFieldStyle(RoundedBorderTextFieldStyle())
                TextField("Password...", text: $password).textFieldStyle(RoundedBorderTextFieldStyle())
                
            }
            
            Button(action: buttonClicked) {
                Text("Sign In")
            }
        }
    }
    
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
