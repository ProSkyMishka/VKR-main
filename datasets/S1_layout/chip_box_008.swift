import SwiftUI

struct ContentView: View {
    var body: some View {
        VStack {
            Text("chip008-label")
                .font(.headline)
                .foregroundColor(.white)
                .padding(.horizontal, 18)
                .padding(.vertical, 6)
                .frame(width: 88, height: 38)
                .background(Color.purple)
                .cornerRadius(19)
                .shadow(radius: 2)
        }
        .padding()
    }
}
