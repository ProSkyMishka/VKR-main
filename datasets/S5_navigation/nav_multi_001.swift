import SwiftUI

struct ContentView: View {
    var body: some View {
        NavigationView {
            VStack(spacing: 10) {
                NavigationLink("nm001-page1") { Text("nm001-body1") }
                NavigationLink("nm001-page2") { Text("nm001-body2") }
                NavigationLink("nm001-page3") { Text("nm001-body3") }
            }
            .navigationTitle("nm001-menu")
        }
    }
}
