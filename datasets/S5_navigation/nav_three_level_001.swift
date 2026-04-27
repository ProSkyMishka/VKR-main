import SwiftUI

struct Cn3001: View {
    var body: some View { Text("n3001-leaf") }
}

struct Bn3001: View {
    var body: some View {
        VStack {
            Text("n3001-level2")
            NavigationLink("n3001-toC") { Cn3001() }
        }
    }
}

struct An3001: View {
    var body: some View {
        VStack {
            Text("n3001-level1")
            NavigationLink("n3001-toB") { Bn3001() }
        }
    }
}

struct ContentView: View {
    var body: some View {
        NavigationView {
            VStack {
                Text("n3001-root")
                NavigationLink("n3001-toA") { An3001() }
            }
            .navigationTitle("n3001-chain")
        }
    }
}
