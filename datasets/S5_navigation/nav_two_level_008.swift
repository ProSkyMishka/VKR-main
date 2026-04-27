import SwiftUI

struct Bn2008: View {
    var body: some View { Text("n2008-level2") }
}

struct An2008: View {
    var body: some View {
        VStack {
            Text("n2008-level1")
            NavigationLink("n2008-deeper") { Bn2008() }
        }
    }
}

struct ContentView: View {
    var body: some View {
        NavigationView {
            VStack {
                Text("n2008-root")
                NavigationLink("n2008-enter") { An2008() }
            }
            .navigationTitle("n2008-top")
        }
    }
}
