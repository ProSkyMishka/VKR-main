import SwiftUI

struct Cn3011: View {
    var body: some View { Text("n3011-leaf") }
}

struct Bn3011: View {
    var body: some View {
        VStack {
            Text("n3011-level2")
            NavigationLink("n3011-toC") { Cn3011() }
        }
    }
}

struct An3011: View {
    var body: some View {
        VStack {
            Text("n3011-level1")
            NavigationLink("n3011-toB") { Bn3011() }
        }
    }
}

struct ContentView: View {
    var body: some View {
        NavigationView {
            VStack {
                Text("n3011-root")
                NavigationLink("n3011-toA") { An3011() }
            }
            .navigationTitle("n3011-chain")
        }
    }
}
