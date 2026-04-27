import SwiftUI

struct ContentView: View {
    var body: some View {
        VStack {
            Text("chip009-label")
                .font(.headline)
                .foregroundColor(.white)
                .padding(.horizontal, 19)
                .padding(.vertical, 7)
                .frame(width: 89, height: 39)
                .background(Color.purple)
                .cornerRadius(19)
                .shadow(radius: 2)
        }
        .padding()
    }
}
