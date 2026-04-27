import SwiftUI

struct Cn3002: View {
    var body: some View { Text("n3002-leaf") }
}

struct Bn3002: View {
    var body: some View {
        VStack {
            Text("n3002-level2")
            NavigationLink("n3002-toC") { Cn3002() }
        }
    }
}

struct An3002: View {
    var body: some View {
        VStack {
            Text("n3002-level1")
            NavigationLink("n3002-toB") { Bn3002() }
        }
    }
}

struct ContentView: View {
    var body: some View {
        NavigationView {
            VStack {
                Text("n3002-root")
                NavigationLink("n3002-toA") { An3002() }
            }
            .navigationTitle("n3002-chain")
        }
    }
}
