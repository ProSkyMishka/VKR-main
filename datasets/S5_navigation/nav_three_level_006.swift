import SwiftUI

struct Cn3006: View {
    var body: some View { Text("n3006-leaf") }
}

struct Bn3006: View {
    var body: some View {
        VStack {
            Text("n3006-level2")
            NavigationLink("n3006-toC") { Cn3006() }
        }
    }
}

struct An3006: View {
    var body: some View {
        VStack {
            Text("n3006-level1")
            NavigationLink("n3006-toB") { Bn3006() }
        }
    }
}

struct ContentView: View {
    var body: some View {
        NavigationView {
            VStack {
                Text("n3006-root")
                NavigationLink("n3006-toA") { An3006() }
            }
            .navigationTitle("n3006-chain")
        }
    }
}
