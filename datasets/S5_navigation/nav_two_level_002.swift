import SwiftUI

struct Bn2002: View {
    var body: some View { Text("n2002-level2") }
}

struct An2002: View {
    var body: some View {
        VStack {
            Text("n2002-level1")
            NavigationLink("n2002-deeper") { Bn2002() }
        }
    }
}

struct ContentView: View {
    var body: some View {
        NavigationView {
            VStack {
                Text("n2002-root")
                NavigationLink("n2002-enter") { An2002() }
            }
            .navigationTitle("n2002-top")
        }
    }
}
