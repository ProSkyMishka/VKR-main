import SwiftUI

struct Bn2004: View {
    var body: some View { Text("n2004-level2") }
}

struct An2004: View {
    var body: some View {
        VStack {
            Text("n2004-level1")
            NavigationLink("n2004-deeper") { Bn2004() }
        }
    }
}

struct ContentView: View {
    var body: some View {
        NavigationView {
            VStack {
                Text("n2004-root")
                NavigationLink("n2004-enter") { An2004() }
            }
            .navigationTitle("n2004-top")
        }
    }
}
