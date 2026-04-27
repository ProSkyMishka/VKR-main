import SwiftUI

struct Cn3010: View {
    var body: some View { Text("n3010-leaf") }
}

struct Bn3010: View {
    var body: some View {
        VStack {
            Text("n3010-level2")
            NavigationLink("n3010-toC") { Cn3010() }
        }
    }
}

struct An3010: View {
    var body: some View {
        VStack {
            Text("n3010-level1")
            NavigationLink("n3010-toB") { Bn3010() }
        }
    }
}

struct ContentView: View {
    var body: some View {
        NavigationView {
            VStack {
                Text("n3010-root")
                NavigationLink("n3010-toA") { An3010() }
            }
            .navigationTitle("n3010-chain")
        }
    }
}
