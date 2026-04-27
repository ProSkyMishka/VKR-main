import SwiftUI

struct Bn2003: View {
    var body: some View { Text("n2003-level2") }
}

struct An2003: View {
    var body: some View {
        VStack {
            Text("n2003-level1")
            NavigationLink("n2003-deeper") { Bn2003() }
        }
    }
}

struct ContentView: View {
    var body: some View {
        NavigationView {
            VStack {
                Text("n2003-root")
                NavigationLink("n2003-enter") { An2003() }
            }
            .navigationTitle("n2003-top")
        }
    }
}
