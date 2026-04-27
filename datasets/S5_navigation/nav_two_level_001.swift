import SwiftUI

struct Bn2001: View {
    var body: some View { Text("n2001-level2") }
}

struct An2001: View {
    var body: some View {
        VStack {
            Text("n2001-level1")
            NavigationLink("n2001-deeper") { Bn2001() }
        }
    }
}

struct ContentView: View {
    var body: some View {
        NavigationView {
            VStack {
                Text("n2001-root")
                NavigationLink("n2001-enter") { An2001() }
            }
            .navigationTitle("n2001-top")
        }
    }
}
