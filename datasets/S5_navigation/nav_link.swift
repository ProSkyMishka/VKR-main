import SwiftUI

struct DetailView: View {
    var body: some View {
        Text("Detail")
    }
}

struct ContentView: View {
    var body: some View {
        NavigationView {
            VStack {
                NavigationLink("Go to Detail") {
                    DetailView()
                }
            }
            .navigationTitle("Root")
        }
    }
}
