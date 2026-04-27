import SwiftUI

struct Cn3003: View {
    var body: some View { Text("n3003-leaf") }
}

struct Bn3003: View {
    var body: some View {
        VStack {
            Text("n3003-level2")
            NavigationLink("n3003-toC") { Cn3003() }
        }
    }
}

struct An3003: View {
    var body: some View {
        VStack {
            Text("n3003-level1")
            NavigationLink("n3003-toB") { Bn3003() }
        }
    }
}

struct ContentView: View {
    var body: some View {
        NavigationView {
            VStack {
                Text("n3003-root")
                NavigationLink("n3003-toA") { An3003() }
            }
            .navigationTitle("n3003-chain")
        }
    }
}
