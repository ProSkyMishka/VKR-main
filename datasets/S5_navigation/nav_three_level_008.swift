import SwiftUI

struct Cn3008: View {
    var body: some View { Text("n3008-leaf") }
}

struct Bn3008: View {
    var body: some View {
        VStack {
            Text("n3008-level2")
            NavigationLink("n3008-toC") { Cn3008() }
        }
    }
}

struct An3008: View {
    var body: some View {
        VStack {
            Text("n3008-level1")
            NavigationLink("n3008-toB") { Bn3008() }
        }
    }
}

struct ContentView: View {
    var body: some View {
        NavigationView {
            VStack {
                Text("n3008-root")
                NavigationLink("n3008-toA") { An3008() }
            }
            .navigationTitle("n3008-chain")
        }
    }
}
