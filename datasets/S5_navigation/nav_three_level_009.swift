import SwiftUI

struct Cn3009: View {
    var body: some View { Text("n3009-leaf") }
}

struct Bn3009: View {
    var body: some View {
        VStack {
            Text("n3009-level2")
            NavigationLink("n3009-toC") { Cn3009() }
        }
    }
}

struct An3009: View {
    var body: some View {
        VStack {
            Text("n3009-level1")
            NavigationLink("n3009-toB") { Bn3009() }
        }
    }
}

struct ContentView: View {
    var body: some View {
        NavigationView {
            VStack {
                Text("n3009-root")
                NavigationLink("n3009-toA") { An3009() }
            }
            .navigationTitle("n3009-chain")
        }
    }
}
