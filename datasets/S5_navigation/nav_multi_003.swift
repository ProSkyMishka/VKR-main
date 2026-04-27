import SwiftUI

struct ContentView: View {
    var body: some View {
        NavigationView {
            VStack(spacing: 10) {
                NavigationLink("nm003-page1") { Text("nm003-body1") }
                NavigationLink("nm003-page2") { Text("nm003-body2") }
                NavigationLink("nm003-page3") { Text("nm003-body3") }
            }
            .navigationTitle("nm003-menu")
        }
    }
}
