import SwiftUI

struct ContentView: View {
    var body: some View {
        NavigationView {
            VStack(spacing: 10) {
                NavigationLink("nm007-page1") { Text("nm007-body1") }
                NavigationLink("nm007-page2") { Text("nm007-body2") }
                NavigationLink("nm007-page3") { Text("nm007-body3") }
            }
            .navigationTitle("nm007-menu")
        }
    }
}
