import SwiftUI

struct Bn2010: View {
    var body: some View { Text("n2010-level2") }
}

struct An2010: View {
    var body: some View {
        VStack {
            Text("n2010-level1")
            NavigationLink("n2010-deeper") { Bn2010() }
        }
    }
}

struct ContentView: View {
    var body: some View {
        NavigationView {
            VStack {
                Text("n2010-root")
                NavigationLink("n2010-enter") { An2010() }
            }
            .navigationTitle("n2010-top")
        }
    }
}
