import SwiftUI
struct DetailView: View {
    let title: String
    var body: some View { Text("Detail: \(title)") }
}
struct ContentView: View {
    var body: some View {
        NavigationView {
            NavigationLink("Open") { DetailView(title: "Open") }
                .navigationTitle("Root")
        }
    }
}
