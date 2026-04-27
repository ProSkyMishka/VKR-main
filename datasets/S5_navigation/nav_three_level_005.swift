import SwiftUI

struct Cn3005: View {
    var body: some View { Text("n3005-leaf") }
}

struct Bn3005: View {
    var body: some View {
        VStack {
            Text("n3005-level2")
            NavigationLink("n3005-toC") { Cn3005() }
        }
    }
}

struct An3005: View {
    var body: some View {
        VStack {
            Text("n3005-level1")
            NavigationLink("n3005-toB") { Bn3005() }
        }
    }
}

struct ContentView: View {
    var body: some View {
        NavigationView {
            VStack {
                Text("n3005-root")
                NavigationLink("n3005-toA") { An3005() }
            }
            .navigationTitle("n3005-chain")
        }
    }
}
