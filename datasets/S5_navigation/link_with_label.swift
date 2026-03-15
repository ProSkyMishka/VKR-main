import SwiftUI
struct ContentView: View {
    var body: some View {
        NavigationView {
            NavigationLink(destination: Text("Dest")) {
                Text("Go")
            }
            .navigationTitle("Link")
        }
    }
}
