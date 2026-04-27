import SwiftUI

struct ContentView: View {
    var body: some View {
        NavigationView {
            VStack(spacing: 10) {
                NavigationLink("nm006-page1") { Text("nm006-body1") }
                NavigationLink("nm006-page2") { Text("nm006-body2") }
                NavigationLink("nm006-page3") { Text("nm006-body3") }
            }
            .navigationTitle("nm006-menu")
        }
    }
}
