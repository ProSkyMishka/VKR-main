import SwiftUI

struct Bn2011: View {
    var body: some View { Text("n2011-level2") }
}

struct An2011: View {
    var body: some View {
        VStack {
            Text("n2011-level1")
            NavigationLink("n2011-deeper") { Bn2011() }
        }
    }
}

struct ContentView: View {
    var body: some View {
        NavigationView {
            VStack {
                Text("n2011-root")
                NavigationLink("n2011-enter") { An2011() }
            }
            .navigationTitle("n2011-top")
        }
    }
}
