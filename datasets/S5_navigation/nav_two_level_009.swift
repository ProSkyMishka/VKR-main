import SwiftUI

struct Bn2009: View {
    var body: some View { Text("n2009-level2") }
}

struct An2009: View {
    var body: some View {
        VStack {
            Text("n2009-level1")
            NavigationLink("n2009-deeper") { Bn2009() }
        }
    }
}

struct ContentView: View {
    var body: some View {
        NavigationView {
            VStack {
                Text("n2009-root")
                NavigationLink("n2009-enter") { An2009() }
            }
            .navigationTitle("n2009-top")
        }
    }
}
