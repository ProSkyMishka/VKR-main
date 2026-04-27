import SwiftUI

struct Cn3004: View {
    var body: some View { Text("n3004-leaf") }
}

struct Bn3004: View {
    var body: some View {
        VStack {
            Text("n3004-level2")
            NavigationLink("n3004-toC") { Cn3004() }
        }
    }
}

struct An3004: View {
    var body: some View {
        VStack {
            Text("n3004-level1")
            NavigationLink("n3004-toB") { Bn3004() }
        }
    }
}

struct ContentView: View {
    var body: some View {
        NavigationView {
            VStack {
                Text("n3004-root")
                NavigationLink("n3004-toA") { An3004() }
            }
            .navigationTitle("n3004-chain")
        }
    }
}
