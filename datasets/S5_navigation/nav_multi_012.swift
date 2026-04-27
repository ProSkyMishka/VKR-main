import SwiftUI

struct ContentView: View {
    var body: some View {
        NavigationView {
            VStack(spacing: 10) {
                NavigationLink("nm012-page1") { Text("nm012-body1") }
                NavigationLink("nm012-page2") { Text("nm012-body2") }
                NavigationLink("nm012-page3") { Text("nm012-body3") }
            }
            .navigationTitle("nm012-menu")
        }
    }
}
