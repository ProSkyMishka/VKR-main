import SwiftUI

struct ContentView: View {
    var body: some View {
        NavigationView {
            VStack(spacing: 10) {
                NavigationLink("nm005-page1") { Text("nm005-body1") }
                NavigationLink("nm005-page2") { Text("nm005-body2") }
                NavigationLink("nm005-page3") { Text("nm005-body3") }
            }
            .navigationTitle("nm005-menu")
        }
    }
}
