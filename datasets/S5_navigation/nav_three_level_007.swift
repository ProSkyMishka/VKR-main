import SwiftUI

struct Cn3007: View {
    var body: some View { Text("n3007-leaf") }
}

struct Bn3007: View {
    var body: some View {
        VStack {
            Text("n3007-level2")
            NavigationLink("n3007-toC") { Cn3007() }
        }
    }
}

struct An3007: View {
    var body: some View {
        VStack {
            Text("n3007-level1")
            NavigationLink("n3007-toB") { Bn3007() }
        }
    }
}

struct ContentView: View {
    var body: some View {
        NavigationView {
            VStack {
                Text("n3007-root")
                NavigationLink("n3007-toA") { An3007() }
            }
            .navigationTitle("n3007-chain")
        }
    }
}
