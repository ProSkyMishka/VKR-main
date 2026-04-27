import SwiftUI

struct Cn3012: View {
    var body: some View { Text("n3012-leaf") }
}

struct Bn3012: View {
    var body: some View {
        VStack {
            Text("n3012-level2")
            NavigationLink("n3012-toC") { Cn3012() }
        }
    }
}

struct An3012: View {
    var body: some View {
        VStack {
            Text("n3012-level1")
            NavigationLink("n3012-toB") { Bn3012() }
        }
    }
}

struct ContentView: View {
    var body: some View {
        NavigationView {
            VStack {
                Text("n3012-root")
                NavigationLink("n3012-toA") { An3012() }
            }
            .navigationTitle("n3012-chain")
        }
    }
}
