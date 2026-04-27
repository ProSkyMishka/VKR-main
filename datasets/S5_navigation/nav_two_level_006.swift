import SwiftUI

struct Bn2006: View {
    var body: some View { Text("n2006-level2") }
}

struct An2006: View {
    var body: some View {
        VStack {
            Text("n2006-level1")
            NavigationLink("n2006-deeper") { Bn2006() }
        }
    }
}

struct ContentView: View {
    var body: some View {
        NavigationView {
            VStack {
                Text("n2006-root")
                NavigationLink("n2006-enter") { An2006() }
            }
            .navigationTitle("n2006-top")
        }
    }
}
