import SwiftUI

struct ContentView: View {
    var body: some View {
        NavigationView {
            VStack(spacing: 10) {
                NavigationLink("nm009-page1") { Text("nm009-body1") }
                NavigationLink("nm009-page2") { Text("nm009-body2") }
                NavigationLink("nm009-page3") { Text("nm009-body3") }
            }
            .navigationTitle("nm009-menu")
        }
    }
}
