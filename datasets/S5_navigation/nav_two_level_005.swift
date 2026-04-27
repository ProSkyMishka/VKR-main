import SwiftUI

struct Bn2005: View {
    var body: some View { Text("n2005-level2") }
}

struct An2005: View {
    var body: some View {
        VStack {
            Text("n2005-level1")
            NavigationLink("n2005-deeper") { Bn2005() }
        }
    }
}

struct ContentView: View {
    var body: some View {
        NavigationView {
            VStack {
                Text("n2005-root")
                NavigationLink("n2005-enter") { An2005() }
            }
            .navigationTitle("n2005-top")
        }
    }
}
