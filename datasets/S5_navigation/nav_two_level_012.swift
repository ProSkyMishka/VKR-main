import SwiftUI

struct Bn2012: View {
    var body: some View { Text("n2012-level2") }
}

struct An2012: View {
    var body: some View {
        VStack {
            Text("n2012-level1")
            NavigationLink("n2012-deeper") { Bn2012() }
        }
    }
}

struct ContentView: View {
    var body: some View {
        NavigationView {
            VStack {
                Text("n2012-root")
                NavigationLink("n2012-enter") { An2012() }
            }
            .navigationTitle("n2012-top")
        }
    }
}
