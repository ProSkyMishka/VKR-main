import SwiftUI

struct Bn2007: View {
    var body: some View { Text("n2007-level2") }
}

struct An2007: View {
    var body: some View {
        VStack {
            Text("n2007-level1")
            NavigationLink("n2007-deeper") { Bn2007() }
        }
    }
}

struct ContentView: View {
    var body: some View {
        NavigationView {
            VStack {
                Text("n2007-root")
                NavigationLink("n2007-enter") { An2007() }
            }
            .navigationTitle("n2007-top")
        }
    }
}
